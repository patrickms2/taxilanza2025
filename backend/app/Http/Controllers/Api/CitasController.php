<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Carbon\Carbon;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use App\Repositories\CitasRepositoryInterface;

class CitasController extends Controller
{
    protected CitasRepositoryInterface $citasRepository;
    protected Request $request;

    public function __construct(CitasRepositoryInterface $citasRepository, Request $request)
    {
        $this->citasRepository = $citasRepository;
        $this->request = $request;
    }

    public function index()
    {
        $payload = $this->citasRepository->findAll($this->request->all());

        $fileType = request()->query('filetype');
        if($fileType && $fileType == 'csv') {
            header("Content-type: text/csv");
            header("Cache-Control: no-store, no-cache");
            header('Content-Disposition: attachment; filename="citas.csv"');
            $rows = $payload['rows'];
            $fields = array('id','id_cita','hora','id_departamento','usuarios','taxistas','id_creador',
        'lugar',

      'f_creacion',
        'fecha',);

            $f = fopen('php://output', 'w');

            fputcsv($f, $fields);

            foreach($rows as $row)
                {
                    fputcsv($f, array($row['id'],$row['id_cita'],$row['hora'],$row['id_departamento'],$row['usuarios'],$row['taxistas'],$row['id_creador'],
        $row['lugar'],

      $row['f_creacion'],
        $row['fecha'],));
                }

            fclose($f);

        } else {
            return response()->json($payload);
        }
    }

    public function count()
    {
        $payload = $this->citasRepository->findAll($this->request->all());

        $countPayload = ['count' => $payload['count']];
        return response()->json($countPayload);
    }

    public function show($id)
    {
        $payload = $this->citasRepository->findById($id);

        return response()->json($payload);
    }

    public function store()
    {
        $payload = $this->citasRepository->create($this->request->all(), auth()->user());

        return response()->json($payload);
    }

    public function update($id)
    {
        $payload = $this->citasRepository->update($id, $this->request->all(), auth()->user());

        return response()->json($payload);
    }

    public function destroy($id)
    {
        $this->citasRepository->destroy($id);

        return response()->json(true, 204);
    }

    public function findAllAutocomplete()
    {
        $payload = $this->citasRepository->findAllAutocomplete($this->request->only(['query', 'limit']));

        return response()->json($payload);
    }
}

