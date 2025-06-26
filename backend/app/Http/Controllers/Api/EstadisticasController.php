<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Carbon\Carbon;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use App\Repositories\EstadisticasRepositoryInterface;

class EstadisticasController extends Controller
{
    protected EstadisticasRepositoryInterface $estadisticasRepository;
    protected Request $request;

    public function __construct(EstadisticasRepositoryInterface $estadisticasRepository, Request $request)
    {
        $this->estadisticasRepository = $estadisticasRepository;
        $this->request = $request;
    }

    public function index()
    {
        $payload = $this->estadisticasRepository->findAll($this->request->all());

        $fileType = request()->query('filetype');
        if($fileType && $fileType == 'csv') {
            header("Content-type: text/csv");
            header("Cache-Control: no-store, no-cache");
            header('Content-Disposition: attachment; filename="estadisticas.csv"');
            $rows = $payload['rows'];
            $fields = array('id','id_estadistica','id_usuario','id_departamento',

      'fecha',
        );

            $f = fopen('php://output', 'w');

            fputcsv($f, $fields);

            foreach($rows as $row)
                {
                    fputcsv($f, array($row['id'],$row['id_estadistica'],$row['id_usuario'],$row['id_departamento'],

      $row['fecha'],
        ));
                }

            fclose($f);

        } else {
            return response()->json($payload);
        }
    }

    public function count()
    {
        $payload = $this->estadisticasRepository->findAll($this->request->all());

        $countPayload = ['count' => $payload['count']];
        return response()->json($countPayload);
    }

    public function show($id)
    {
        $payload = $this->estadisticasRepository->findById($id);

        return response()->json($payload);
    }

    public function store()
    {
        $payload = $this->estadisticasRepository->create($this->request->all(), auth()->user());

        return response()->json($payload);
    }

    public function update($id)
    {
        $payload = $this->estadisticasRepository->update($id, $this->request->all(), auth()->user());

        return response()->json($payload);
    }

    public function destroy($id)
    {
        $this->estadisticasRepository->destroy($id);

        return response()->json(true, 204);
    }

    public function findAllAutocomplete()
    {
        $payload = $this->estadisticasRepository->findAllAutocomplete($this->request->only(['query', 'limit']));

        return response()->json($payload);
    }
}

