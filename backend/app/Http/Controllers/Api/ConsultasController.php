<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Carbon\Carbon;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use App\Repositories\ConsultasRepositoryInterface;

class ConsultasController extends Controller
{
    protected ConsultasRepositoryInterface $consultasRepository;
    protected Request $request;

    public function __construct(ConsultasRepositoryInterface $consultasRepository, Request $request)
    {
        $this->consultasRepository = $consultasRepository;
        $this->request = $request;
    }

    public function index()
    {
        $payload = $this->consultasRepository->findAll($this->request->all());

        $fileType = request()->query('filetype');
        if($fileType && $fileType == 'csv') {
            header("Content-type: text/csv");
            header("Cache-Control: no-store, no-cache");
            header('Content-Disposition: attachment; filename="consultas.csv"');
            $rows = $payload['rows'];
            $fields = array('id','id_consulta','id_taxista','id_departamento','resultado',

      'fecha_consulta',
        );

            $f = fopen('php://output', 'w');

            fputcsv($f, $fields);

            foreach($rows as $row)
                {
                    fputcsv($f, array($row['id'],$row['id_consulta'],$row['id_taxista'],$row['id_departamento'],$row['resultado'],

      $row['fecha_consulta'],
        ));
                }

            fclose($f);

        } else {
            return response()->json($payload);
        }
    }

    public function count()
    {
        $payload = $this->consultasRepository->findAll($this->request->all());

        $countPayload = ['count' => $payload['count']];
        return response()->json($countPayload);
    }

    public function show($id)
    {
        $payload = $this->consultasRepository->findById($id);

        return response()->json($payload);
    }

    public function store()
    {
        $payload = $this->consultasRepository->create($this->request->all(), auth()->user());

        return response()->json($payload);
    }

    public function update($id)
    {
        $payload = $this->consultasRepository->update($id, $this->request->all(), auth()->user());

        return response()->json($payload);
    }

    public function destroy($id)
    {
        $this->consultasRepository->destroy($id);

        return response()->json(true, 204);
    }

    public function findAllAutocomplete()
    {
        $payload = $this->consultasRepository->findAllAutocomplete($this->request->only(['query', 'limit']));

        return response()->json($payload);
    }
}

